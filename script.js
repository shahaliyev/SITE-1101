const NS = "site1101_";
const STORAGE_VERSION = "v2";
const VERSION_KEY = `${NS}store_version`;
const STORE = {
  ta: `${NS}ta_${STORAGE_VERSION}`,
  sched: `${NS}sched_${STORAGE_VERSION}`,
  notes: `${NS}notes_${STORAGE_VERSION}`,
  admin: `${NS}admin_${STORAGE_VERSION}`,
};
const ADMIN_PASS = "Salam";

const DEF_TA = [
  { day: "Monday", time: "16:00–17:30", room: "B012" },
  { day: "Tuesday", time: "12:00–13:30", room: "B012" },
  { day: "Wednesday", time: "14:40–16:40", room: "B012" },
];
const DEF_SCHED = [
  { day: "Monday", time: "08:30", room: "E125", note: "" },
  { day: "Tuesday", time: "08:30", room: "B303", note: "" },
  { day: "Tuesday", time: "10:00", room: "A301", note: "" },
  { day: "Tuesday", time: "14:30", room: "D208", note: "" },
  { day: "Tuesday", time: "16:00", room: "B101", note: "" },
  { day: "Thursday", time: "08:30", room: "B203", note: "" },
  { day: "Friday", time: "08:30", room: "B302", note: "" },
  { day: "Friday", time: "10:00", room: "B302", note: "" },
  { day: "Friday", time: "13:00", room: "B102", note: "" },
  { day: "Saturday", time: "11:30", room: "B303", note: "" },
];
const DEF_NOTES = [
  {
    week: "Week 01–02",
    title: "Week 1–2 Lecture Notes (Google Doc)",
    url: "https://docs.google.com/document/d/1iodZjgmqH8KYKOfWsc767gJ-muCc3xdP/edit?rtpof=true&tab=t.0",
    updated: "Oct 2025",
  },
  {
    week: "Week 03",
    title: "Week 3 Lecture Notes (Google Doc)",
    url: "https://docs.google.com/document/d/1iodZjgmqH8KYKOfWsc767gJ-muCc3xdP/edit?rtpof=true&tab=t.0",
    updated: "Oct 2025",
  },
];

const $ = (s) => document.querySelector(s);
const $$ = (s) => Array.from(document.querySelectorAll(s));

function load(key, fallback) {
  try {
    const s = localStorage.getItem(key);
    return s ? JSON.parse(s) : structuredClone(fallback);
  } catch {
    return structuredClone(fallback);
  }
}
function save(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}
function clearNamespace() {
  const toDel = [];
  for (let i = 0; i < localStorage.length; i++) {
    const k = localStorage.key(i);
    if (k && k.startsWith(NS)) toDel.push(k);
  }
  toDel.forEach((k) => localStorage.removeItem(k));
}
function ensureStorageVersion() {
  const cur = localStorage.getItem(VERSION_KEY);
  if (cur !== STORAGE_VERSION) {
    clearNamespace();
    localStorage.setItem(VERSION_KEY, STORAGE_VERSION);
  }
}
function gdocToPdf(url) {
  try {
    const m = url.match(/https:\/\/docs\.google\.com\/document\/d\/([^/]+)/);
    return m
      ? `https://docs.google.com/document/d/${m[1]}/export?format=pdf`
      : url;
  } catch {
    return url;
  }
}

function renderTA(rows) {
  const tbody = $("#taTable tbody");
  if (!tbody) return;
  tbody.innerHTML = "";
  rows.forEach((r, i) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${r.day}</td>
      <td>${r.time}</td>
      <td>${r.room}</td>
      <td class="delcell"><button class="delbtn admin-only" data-kind="ta" data-index="${i}">Delete</button></td>
    `;
    tbody.appendChild(tr);
  });
}
function renderSched(rows) {
  const tbody = $("#schedBody");
  if (!tbody) return;
  tbody.innerHTML = "";
  rows.forEach((r, i) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${r.day}</td>
      <td>${r.time}</td>
      <td>${r.room}</td>
      <td>${r.note || ""}</td>
      <td class="delcell"><button class="delbtn admin-only" data-kind="sched" data-index="${i}">Delete</button></td>
    `;
    tbody.appendChild(tr);
  });
}
function renderNotes(rows) {
  const tbody = $("#notesBody");
  if (!tbody) return;
  tbody.innerHTML = "";
  rows.forEach((r, i) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${r.week || ""}</td>
      <td>${r.title || ""}</td>
      <td>${r.url || ""}</td>
      <td>${r.updated || ""}</td>
      <td class="delcell"><button class="delbtn admin-only" data-kind="notes" data-index="${i}">Delete</button></td>
    `;
    tbody.appendChild(tr);
  });
  Array.from(tbody.rows).forEach((row) => {
    const urlTd = row.cells[2];
    const raw = urlTd.textContent.trim();
    if (raw) {
      const pdf = gdocToPdf(raw);
      urlTd.innerHTML = `
        <a href="${raw}" target="_blank" rel="noopener">Open Doc</a>
        &nbsp;|&nbsp;
        <a href="${pdf}" target="_blank" rel="noopener">Open PDF</a>
      `;
    }
  });
}

function setEditable(tbodyEl, on) {
  tbodyEl.querySelectorAll("td").forEach((td) => {
    if (td.classList.contains("delcell")) return;
    if (on && td.querySelector && td.querySelector("a")) {
      const a = td.querySelector("a");
      td.textContent = a.getAttribute("href");
    }
    td.contentEditable = on ? "true" : "false";
    td.classList.toggle("editable", on);
  });
}
function readTAFromTable() {
  return Array.from($("#taTable tbody").rows).map((r) => {
    const tds = r.querySelectorAll("td");
    return {
      day: tds[0].innerText.trim(),
      time: tds[1].innerText.trim(),
      room: tds[2].innerText.trim(),
    };
  });
}
function readSchedFromTable() {
  return Array.from($("#schedBody").rows).map((r) => {
    const tds = r.querySelectorAll("td");
    return {
      day: tds[0].innerText.trim(),
      time: tds[1].innerText.trim(),
      room: tds[2].innerText.trim(),
      note: tds[3].innerText.trim(),
    };
  });
}
function readNotesFromTable() {
  return Array.from($("#notesBody").rows).map((r) => {
    const tds = r.querySelectorAll("td");
    const urlText = tds[2].querySelector("a")
      ? tds[2].querySelector("a").getAttribute("href")
      : tds[2].innerText.trim();
    return {
      week: tds[0].innerText.trim(),
      title: tds[1].innerText.trim(),
      url: urlText,
      updated: tds[3].innerText.trim(),
    };
  });
}

function isAdmin() {
  return localStorage.getItem(STORE.admin) === "1";
}
function setAdmin(on) {
  if (on) {
    localStorage.setItem(STORE.admin, "1");
    document.documentElement.classList.add("is-admin");
  } else {
    localStorage.removeItem(STORE.admin);
    document.documentElement.classList.remove("is-admin");
  }
  $$(".edit-btn").forEach((btn) => {
    btn.textContent = "✎ Edit";
    const target = btn.getAttribute("data-target");
    const tbody =
      target === "taTable"
        ? $("#taTable tbody")
        : target === "schedBody"
        ? $("#schedBody")
        : target === "notesBody"
        ? $("#notesBody")
        : null;
    if (tbody) setEditable(tbody, false);
  });
  const t = $("#adminToggle");
  if (t) t.textContent = isAdmin() ? "🔓 Admin (Logout)" : "🔒 Admin";
}

(function init() {
  ensureStorageVersion();
  try {
    const u = new URL(location.href);
    if (u.searchParams.get("purge") === "1") {
      clearNamespace();
      localStorage.setItem(VERSION_KEY, STORAGE_VERSION);
      u.searchParams.delete("purge");
      location.replace(u.toString());
      return;
    }
  } catch {}
  const y = $("#year");
  if (y) y.textContent = new Date().getFullYear();

  const lightCSS = `
    :root{ --bg:#f6f7fb; --panel:#ffffff; --text:#0c1222; --muted:#5b6475; --border:#e6e7ee; --shadow:0 10px 30px rgba(15,23,42,.08) }
    body{ background: radial-gradient(1200px 600px at 10% -10%, #f1f4ff 0%, var(--bg) 60%); }
    thead th{ background:#f2f4fb; } .note{ color:#1c2540 }
  `;
  const styleEl = document.createElement("style");
  document.head.appendChild(styleEl);
  const prefersLight =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: light)").matches;
  if (prefersLight) document.documentElement.classList.add("light");
  const applyTheme = () => {
    styleEl.textContent = document.documentElement.classList.contains("light")
      ? lightCSS
      : "";
  };
  applyTheme();
  new MutationObserver(applyTheme).observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["class"],
  });
  const themeTog = $("#themeToggle");
  if (themeTog)
    themeTog.addEventListener("click", () =>
      document.documentElement.classList.toggle("light")
    );

  setAdmin(isAdmin());

  let taData = load(STORE.ta, DEF_TA);
  let schedData = load(STORE.sched, DEF_SCHED);
  let notesData = load(STORE.notes, DEF_NOTES);
  renderTA(taData);
  renderSched(schedData);
  renderNotes(notesData);

  const adminBtn = $("#adminToggle");
  if (adminBtn) {
    adminBtn.addEventListener("click", () => {
      if (isAdmin()) {
        setAdmin(false);
        return;
      }
      const pass = prompt("Enter admin passphrase:");
      if (pass && pass === ADMIN_PASS) setAdmin(true);
      else if (pass !== null) alert("Wrong passphrase.");
    });
  }
  const purgeBtn = $("#purgeBtn");
  if (purgeBtn) {
    purgeBtn.addEventListener("click", () => {
      if (!isAdmin()) return;
      if (!confirm("Purge local data for this site?")) return;
      clearNamespace();
      localStorage.setItem(VERSION_KEY, STORAGE_VERSION);
      location.reload();
    });
  }

  $$(".edit-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      if (!isAdmin()) return;
      const target = btn.getAttribute("data-target");
      const tbody =
        target === "taTable"
          ? $("#taTable tbody")
          : target === "schedBody"
          ? $("#schedBody")
          : target === "notesBody"
          ? $("#notesBody")
          : null;
      if (!tbody) return;
      const saving = btn.textContent.includes("Save");
      if (!saving) {
        btn.textContent = "💾 Save";
        setEditable(tbody, true);
      } else {
        btn.textContent = "✎ Edit";
        setEditable(tbody, false);
        if (target === "taTable") {
          taData = readTAFromTable();
          save(STORE.ta, taData);
          renderTA(taData);
        } else if (target === "schedBody") {
          schedData = readSchedFromTable();
          save(STORE.sched, schedData);
          renderSched(schedData);
        } else if (target === "notesBody") {
          notesData = readNotesFromTable();
          save(STORE.notes, notesData);
          renderNotes(notesData);
        }
      }
    });
  });
  $$(".mini-btn[data-add]").forEach((btn) => {
    btn.addEventListener("click", () => {
      if (!isAdmin()) return;
      const kind = btn.getAttribute("data-add");
      if (kind === "ta") {
        taData.push({ day: "Day", time: "00:00–00:00", room: "TBA" });
        save(STORE.ta, taData);
        renderTA(taData);
      } else if (kind === "sched") {
        schedData.push({
          day: "Day",
          time: "00:00",
          room: "TBA",
          note: "",
        });
        save(STORE.sched, schedData);
        renderSched(schedData);
      } else if (kind === "notes") {
        notesData.push({
          week: "Week XX",
          title: "New Note",
          url: "https://",
          updated: new Date().toLocaleDateString("en-GB", {
            year: "numeric",
            month: "short",
          }),
        });
        save(STORE.notes, notesData);
        renderNotes(notesData);
      }
    });
  });
  $$(".mini-btn[data-reset]").forEach((btn) => {
    btn.addEventListener("click", () => {
      if (!isAdmin()) return;
      const kind = btn.getAttribute("data-reset");
      if (!confirm("Reset to defaults?")) return;
      if (kind === "ta") {
        taData = structuredClone(DEF_TA);
        save(STORE.ta, taData);
        renderTA(taData);
      } else if (kind === "sched") {
        schedData = structuredClone(DEF_SCHED);
        save(STORE.sched, schedData);
        renderSched(schedData);
      } else if (kind === "notes") {
        notesData = structuredClone(DEF_NOTES);
        save(STORE.notes, notesData);
        renderNotes(notesData);
      }
    });
  });
  document.addEventListener("click", (e) => {
    const btn = e.target.closest(".delbtn");
    if (!btn) return;
    if (!isAdmin()) return;
    const kind = btn.getAttribute("data-kind");
    const idx = +btn.getAttribute("data-index");
    if (kind === "ta") {
      taData.splice(idx, 1);
      save(STORE.ta, taData);
      renderTA(taData);
    } else if (kind === "sched") {
      schedData.splice(idx, 1);
      save(STORE.sched, schedData);
      renderSched(schedData);
    } else if (kind === "notes") {
      notesData.splice(idx, 1);
      save(STORE.notes, notesData);
      renderNotes(notesData);
    }
  });
  $$('a[href^="#"]').forEach((a) => {
    a.addEventListener("click", (e) => {
      const id = a.getAttribute("href");
      if (id.length > 1 && $(id)) {
        e.preventDefault();
        $(id).scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });
})();
