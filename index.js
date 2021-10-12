let Image = (src, left, bottom) => {
    let img = document.createElement('img')
    img.src = src
    img.style.position = 'fixed'
    img.style.left = `${left}px`
    img.style.bottom = `${bottom}px`
    //Auto append passed img to body
    document.body.append(img)
    return img;
}
let Item = (src, left, bottom) => {
    let img = Image(src, left, bottom)
    img.addEventListener('dblclick',function(){img.remove()})
}

//Run tile fill for screen
let width = window.innerWidth, height = window.innerHeight
for(let i = 0; i < width; i+=100) {
    for(let j = 0; j < height; j+=100) {
        //Check for height difference to make sure we can switch to grass
        if(j <= (height*(2/5))) {
            //Switch to grass
            Image('./assets/grass.png',i,j);
        } else {
            //Use sky
            Image('./assets/sky.png',i,j);
        }
    }
}

//Set image properties and append
Image('./assets/green-character.gif',100,100)
Image('./assets/pine-tree.png',450,200)
Image('./assets/tree.png',200,300)
Image('./assets/pillar.png',350,100)
Image('./assets/crate.png',150,200)
Image('./assets/well.png',500,425)
Item('./assets/sword.png',500,405)
Item('./assets/shield.png',165,185)
Item('./assets/staff.png',600,100)