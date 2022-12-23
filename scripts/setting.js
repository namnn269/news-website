'use strict';

function initSettings() {
  const inputPageSize = document.getElementById('input-page-size');
  const inputCategory = document.getElementById('input-category');
  const btnSaveSetting = document.getElementById('btn-submit');
  const currentUser = getCurrentUser('currentUser');
  if (!currentUser) return;

  const defaultSetting = {
    pageSize: 5,
    category: 'General',
  };
  let currentSettings = getSettings(currentUser.userName);

  // check curerent settings
  if (!currentSettings) {
    currentSettings = defaultSetting;
    setSettings(currentUser.userName, {
      pageSize: currentSettings.pageSize,
      category: currentSettings.category,
    });
  }

  //display setting input
  inputPageSize.value = currentSettings.pageSize;
  inputCategory.value = currentSettings.category;

  // save settings
  btnSaveSetting.addEventListener('click', function () {
    let pageSize = Number.parseInt(inputPageSize.value);
    let category = inputCategory.value;

    if (pageSize <= 0) {
      pageSize = 5;
      inputPageSize.value = pageSize;
    }

    setSettings(currentUser.userName, {
      pageSize: pageSize,
      category: category,
    });
  });
}
initSettings();
