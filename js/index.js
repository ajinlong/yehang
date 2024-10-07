         // 相册相关逻辑
        var container = document.querySelector('.container');
        var imageCount = 15; // 图片数量
        var imageIndexes = Array.from({ length: imageCount }, (_, i) => i + 1);
        
        // 将图片索引数组随机排序
        imageIndexes.sort(function() {
          return Math.random() - 0.5;
        });
        
        for (var i = 0; i < imageCount; i++) {
          var img = document.createElement('img');
          img.src = './img/' + imageIndexes[i] + '.png';
          var link = document.createElement('a');
        
          link.setAttribute('data-fancybox', 'images');
          link.href = './img/' + imageIndexes[i] + '.png';
          link.appendChild(img);
          var box = document.createElement('div');
          box.className = 'box';
          box.appendChild(link);
          container.appendChild(box);
        }
        
        // 显示照片列表
        function showPhotos() {
            var photoList = document.querySelector('.container');
            var videoList = document.querySelectorAll('.item');
            photoList.style.display = 'block';
            videoList.forEach(video => {
                video.style.display = 'none';
            });
            document.querySelector('#photo-span').classList.add('active');
            document.querySelector('#video-span').classList.remove('active');
        }