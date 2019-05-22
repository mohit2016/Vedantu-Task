const app = document.getElementById('root')


const container = document.createElement('div')
container.setAttribute('class', 'container')


app.appendChild(container)




let btn = document.getElementById('search');

btn.addEventListener('click',()=>{
    let queryString = document.getElementById('repo_name').value;
    fetch(`https://api.github.com/search/repositories?q=${queryString}`).
    then(res => res.json()).
    then((ans) =>{
        // console.log({ ans });
        var items = ans['items'];

        while (container.firstChild) {
            container.removeChild(container.firstChild);
        }

        items.forEach(function(item) {
            // console.log("Repository name : " + item['name']);
            // console.log("Repository Image : " + item['owner']['avatar_url']);
            // console.log("Repository Description : " + item['description']);
            // console.log("Repository Forks : " + item['forks']);
            // console.log("Repository open Issues : " + item['open_issues']);
            // console.log("Repository Link : " + item['html_url']);
            // console.log("------------------------------------------------------"); 
            
          
            

            const card = document.createElement('div')
            card.setAttribute('class', 'card col-lg-3')

            const img = document.createElement('img')
            img.setAttribute('src',item['owner']['avatar_url'])
            img.setAttribute('class','card-img-top')



            const h1 = document.createElement('h4')
            h1.textContent = item['name']

            const p = document.createElement('p')
            p.setAttribute('class', 'card-text')
            p.textContent = item['description']

            const sp1 = document.createElement('span')
            sp1.textContent = " Forks : " + item['forks'] + "\n"

            const sp2 = document.createElement('span')
            sp2.textContent = " Open Issues : " + item['open_issues']

            const a = document.createElement('btn')
            a.setAttribute('href', item['html_url'] )
            a.setAttribute('class', 'btn btn-primary')
            a.textContent ="Visit Profile"


            container.appendChild(card)
            card.appendChild(img)
            card.appendChild(h1)
            card.appendChild(p)
            card.appendChild(sp1)
            card.appendChild(sp2)
            card.appendChild(a)

        }, this);
        
        
        
        
        // console.log(items[0]);
    }).
    catch((err) => console.warn(err));
});


