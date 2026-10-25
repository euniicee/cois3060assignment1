const { test, before } = require("node:test");
const assert = require("node:assert");
const path = require("node:path");
const { JSDOM } = require("jsdom");

let document;

before(async () => {
  const dom = await JSDOM.fromFile(
    path.join(__dirname, "..", "src", "index.html"),
    {
      runScripts: "dangerously",
      resources: "usable",
    },
  );
  await new Promise((resolve) => dom.window.addEventListener("load", resolve));
  document = dom.window.document;
});


// Test 1: Check that the Data Sources section is active on load
test("Data Sources section is active on load", () => {
  assert.ok(document.getElementById("data-sources").classList.contains("active"));
});



// Test 2: Check that the navigation tabs are present and in the correct order
test("navigations show the four tabs in order", () => {
  const labels = [...document.querySelectorAll(".tab")].map((tab) =>
    tab.textContent.trim(),
  );
  assert.deepStrictEqual(labels, [
    "Data Sources",
    "Collection Methods",
    "Analysis Methods",
    "Publication Venues",
  ]);
});

// Test 3: Check that clicking on a tab shows the corresponding content and hides others
test("clicking on a tab shows the corresponding content and hides others", () => {
  const tabs = document.getElementById("data-sources");
  const contents = document.getElementById("collection-methods");

  document.querySelector('[data-tab="collection-methods"]').click();

  // Check that the second content is visible and others are hidden
  assert.ok(contents.classList.contains("active"));
  assert.ok(!tabs.classList.contains("active"));

  // put the page back as we found it
  document.querySelector('[data-tab="data-sources"]').click();
});


// Test 4: Check that clicking on each remaining tab shows the corresponding content and hides others
test("click each remaining tab"), () => {
  const datatabs = document.getElementById("data-sources");
  const collectiontabs = document.getElementById("collection-methods");
  const analysistabs = document.getElementById("analysis-methods");
  const publicationtabs = document.getElementById("publication-venues");

document.querySelector('[data-tab="analysis-methods"]').click();

  // Check that the third content is visible and others are hidden
  assert.ok(analysistabs.classList.contains("active"));
  assert.ok(!datatabs.classList.contains("active"));
  assert.ok(!collectiontabs.classList.contains("active"));
  assert.ok(!publicationtabs.classList.contains("active"));

  document.querySelector('[data-tab="publication-venues"]').click();

  // Check that the fourth content is visible and others are hidden
  assert.ok(publicationtabs.classList.contains("active"));
  assert.ok(!datatabs.classList.contains("active"));
  assert.ok(!collectiontabs.classList.contains("active"));
  assert.ok(!analysistabs.classList.contains("active"));


  // put the page back as we found it
  document.querySelector('[data-tab="data-sources"]').click();

};


