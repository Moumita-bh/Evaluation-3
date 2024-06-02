function countFileExtensions(files) {
    const extentionCounts = {};
    files.forEach(file => {
        const parts = file.split(' ');
        const extention = parts[parts.length - 1];

        if (extentionCounts[extention]){
            extentionCounts[extention]++;
        }else{
            extentionCounts[extention] = 1;  
        }
    });

    return extentionCounts;
}

const files = [
    "document1.pdf",
    "document2.pdf",
    "image1.png",
    "text1.txt",
    "photo1.jpg",
    "program1.exe",
    "data1.csv",
    "report1.pdf"
  ];

  console.log(countFileExtensions(files));
  