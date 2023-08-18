(() => {
    try{
        console.info("Fag");
        fetch("./testfile.json").then(response=>{
            response.json().then(output=>{
                output.forEach(elem=>{
                    createArticle(elem.class, elem.info.title, elem.info.description, elem.info.video_id, elem.info.bg);
                });
            });
        });
    }
    catch{
        console.info();
    };
})

();

function createArticle(item, title, description, video_id, bg){
    let article = document.createElement('article');
    let info = document.createElement('section');
    let h3 = document.createElement('h3');
    let p = document.createElement('p');
    let video = document.createElement('section');
    let iframe = document.createElement('iframe');
    let img = document.createElement('img');

    article.classList.add(item);
    info.classList.add('info');
    h3.innerHTML = title;
    p.innerHTML = description;
    video.classList.add('video');
    iframe.src = `https://www.youtube.com/embed/${video_id}`;
    iframe.frameBorder = 0;
    img.classList.add('bg');
    img.src = bg;

    info.appendChild(h3);
    info.appendChild(p);
    video.appendChild(iframe);
    article.appendChild(info);
    article.appendChild(video);
    article.appendChild(img);

    document.querySelector('#all').appendChild(article);
}