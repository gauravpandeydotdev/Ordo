const YTDlpWrap = require('yt-dlp-wrap').default;
const ytdl = new YTDlpWrap('../usr/bin/yt-dlp');

exports.getYtdlpVersion = async function() {
  return ytdl.getVersion();
};