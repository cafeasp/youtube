//tutorial 

const ytdl = require('ytdl-core');
const ffmpeg = require('fluent-ffmpeg');

// Function to download and convert video to MP3
function downloadAsMp3(url, outputPath) {
   const stream = ytdl(url, {
      quality: 'highestaudio',
   });

   ffmpeg(stream)
      .audioBitrate(128)
      .save('./music/' + outputPath)
      .on('end', () => {
         console.log('Download and conversion complete!');
      });
}

// Example usage
downloadAsMp3('https://www.youtube.com/watch?v=m0Tq0k2IXno&ab_channel=CAFEASP', 'NodeJS-Excel-Web-Add-In-Video-3.mp3');
