[
  [/Windows/i, '#windows-tab'],
  [/Mac OS/i, '#mac-tab'],
  [/Linux|Ubuntu|Debian/i, '#linux-tab']
].find(function(os) {
  return os[0].test(navigator.userAgent);
});

// show diff install pages for diff OS

// https://github.com/xgqfrms-GitHub/website/blob/gh-pages/js/install.js