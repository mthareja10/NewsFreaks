import React, { Component } from 'react'
import './News.css'
import './Bts.css'
import { Link } from 'react-router-dom'
import LoadingBar from 'react-top-loading-bar'

export default class News extends Component {
    state = {
        progress: 0
    }
    setProgress = (progress) => {
        this.setState({ progress: progress })
    }
    articles = [
        {
            "source": {
                "id": null,
                "name": "BBC News"
            },
            "author": "https://www.facebook.com/bbcnews",
            "title": "Colombia plane crash: Mum told children to leave her and get help  BBC",
            "description": "The children's mother survived for four days after the plane crashed in the jungle.",
            "url": "https://www.bbc.com/news/worldlatinamerica65874377",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/15DB6/production/_130062598_9e771119ff4ba01f03326e9683e2e61c713f9fbe.jpg",
            "publishedAt": "20230612T04:13:29Z",
            "content": "The mother of four children rescued after 40 days in the Amazon jungle was alive for four days after their plane crashed. \r\nMagdalena Mucutuy told her children to leave and find help as she lay dying… [+2610 chars]"
        },
        {
            "source": {
                "id": "foxnews",
                "name": "Fox News"
            },
            "author": "Lawrence Richard",
            "title": "Mass shooting at Maryland home leaves 3 dead, several injured: police  Fox News",
            "description": "Annapolis police Chief Ed Jackson said a suspect is in custody after a shooting outside a home in Annapolis, Maryland, left at least three people dead and three others injured.",
            "url": "https://www.foxnews.com/us/massshootingmarylandhomeleaves3deadseveralinjuredpolice",
            "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2023/06/AP23163077001828.jpg",
            "publishedAt": "20230612T03:54:00Z",
            "content": "A mass shooting at a private residence in an otherwise quiet neighborhood in Annapolis, Maryland, on Sunday left at least three people dead and three others injured.\r\nAnnapolis police Chief Ed Jackso… [+1772 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "BBC News"
            },
            "author": "https://www.facebook.com/bbcnews",
            "title": "Ukraine counteroffensive: Kyiv says it has liberated villages in Donetsk region  BBC",
            "description": "The villages in the Donetsk region would represent the first major gains of Kyiv's new advance.",
            "url": "https://www.bbc.com/news/worldeurope65873831",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/16964/production/_130061529_ukraine.jpg",
            "publishedAt": "20230612T03:40:12Z",
            "content": "Ukraine says it has liberated three villages in the southeast of the country in the first victories of its muchanticipated counteroffensive.\r\nFootage on social media showed Ukrainian troops celebr… [+4615 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "YouTube"
            },
            "author": null,
            "title": "Nick Taylor wins playoff in dramatic fashion | Round 4 | RBC Canadian | 2023  PGA TOUR",
            "description": "In the final round of the 2023 RBC Canadian Open, Nick Taylor carded a 6under 66 to finish 72 holes at 17under for the tournament, good enough to tie Tommy...",
            "url": "https://www.youtube.com/watch?v=TxAeyAyNSso",
            "urlToImage": "https://i.ytimg.com/vi/TxAeyAyNSso/maxresdefault.jpg",
            "publishedAt": "20230612T03:33:59Z",
            "content": null
        },
        {
            "source": {
                "id": null,
                "name": "BBC News"
            },
            "author": "https://www.facebook.com/bbcnews",
            "title": "Boris Johnson: MPs to conclude Partygate inquiry  BBC",
            "description": "Mr Johnson quit as an MP dramatically on Friday, branding the Privileges Committee a \"kangaroo court\".",
            "url": "https://www.bbc.com/news/ukpolitics65874224",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/7574/production/_129986003_ce525c6df7bbf6a7c5517836400cb3d7bd4779be.jpg",
            "publishedAt": "20230612T01:56:53Z",
            "content": "MPs investigating whether Boris Johnson misled Parliament about lockdown parties in Downing Street will meet on Monday to conclude their inquiry.\r\nMr Johnson resigned as an MP dramatically on Friday … [+3151 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Yahoo Entertainment"
            },
            "author": "Jessica Menton and Elena Popina",
            "title": "Stocks Traders Eyeing Fed Hedge for Rally With Call Options  Yahoo Finance",
            "description": "(Bloomberg)  Investors are loading up on call options as they brace for a pivotal Federal Reserve decision that’s set to dictate the tone for equities...",
            "url": "https://finance.yahoo.com/news/stockstraderseyeingfedpause130000680.html",
            "urlToImage": "https://media.zenfs.com/en/bloomberg_markets_842/ae23def7919b578b287667a561934356",
            "publishedAt": "20230612T01:21:00Z",
            "content": "(Bloomberg)  Investors are loading up on call options as they brace for a pivotal Federal Reserve decision thats set to dictate the tone for equities heading into the second half of 2023.\r\nMost Rea… [+4258 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "YouTube"
            },
            "author": null,
            "title": "Toyota Save Mart 350 Extended Highlights | NASCAR Cup Series  NASCAR",
            "description": "Catch up on all of the NASCAR Cup Series action from the winding roads of wine country Sunday at Sonoma Raceway.Subscribe to NASCAR on YouTube: htt...",
            "url": "https://www.youtube.com/watch?v=AtPMfgGjx7k",
            "urlToImage": "https://i.ytimg.com/vi/AtPMfgGjx7k/maxresdefault.jpg",
            "publishedAt": "20230611T23:59:53Z",
            "content": null
        },
        {
            "source": {
                "id": "businessinsider",
                "name": "Business Insider"
            },
            "author": "Associated Press",
            "title": "The Unabomber died by suicide, AP reports  Business Insider",
            "description": "Ted Kaczynski, who carried out a 17year bombing campaign that killed three people and injured 23 others, died by suicide, sources told AP.",
            "url": "https://www.businessinsider.com/tedkaczynskiunabombercommittedsuicidecancer20236",
            "urlToImage": "https://i.insider.com/64863c7f1eeec400193dd080?width=1200&format=jpeg",
            "publishedAt": "20230611T23:20:00Z",
            "content": "Ted Kaczynski, known as the \"Unabomber,\" who carried out a 17year bombing campaign that killed three people and injured 23 others, died by suicide, four people familiar with the matter told The Asso… [+3790 chars]"
        }
    ]

    constructor() {
        super()
        this.state = {
            articles: []
        }
        document.title='NewsFreaks - Sports'
    }

    async componentDidMount() {
        this.setProgress(0)
        let url = "https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=617fc18b4285418f982cfbca41cd1bc4&page=1"
        let data = await fetch(url);
        this.setProgress(30)
        let parsedData = await data.json();
        console.log(parsedData);
        this.setProgress(50)
        this.setState({ articles: parsedData.articles })
        this.setProgress(100)
    }


    render() {

        return (
            <>
                <LoadingBar
                    color='white'
                    progress={this.state.progress}
                    height={3}
                    transitionTime={600}
                />
                <nav className="navbar navbar-expand-lg fixed-top">
                    <div className="container-fluid">
                        <Link className="navbar-brand" style={{ color: 'white',fontWeight:'bold'  }} to="/">NewsFreaks</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item" style={{ marginLeft: '160%' }}>
                                    <Link className="nav-link active" style={{ color: 'white' }} aria-current="page" to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" style={{ color: 'white' }} to="/Business">Business</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" style={{ color: 'white' }} to="/Sports">Sports</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" style={{ color: 'white' }} to="/Music">Music</Link>
                                </li>
                            </ul>
                            <form className="d-flex" role="search">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-light" type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                </nav>
                <h1 style={{ textAlign: 'center', marginTop: '3%', fontSize: '50px',fontWeight:'bold'  }}>Sports - Top Headlines</h1>
                <div className="page1">
                    <div className="newsItem">
                        {this.state.articles.map((element) => {
                            return <div className="card mb-3" style={{ maxWidth: '1400px' }} key={element.url}>
                                <div className="row g-0">
                                    <div className="col-md-4">
                                        <img src={element.urlToImage} className="img-fluid rounded-start" alt="..." />
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h5 className="card-title">{element.title}</h5>
                                            <p className="card-text">{element.description}</p>
                                            <p className="card-text"><small className="text-body-primary" style={{ color: 'white' }}>Uploaded by {element.author} on {element.publishedAt}</small></p>
                                            <a href={element.url} target='_blank' className="btn btn-light">Check Out</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        })}
                    </div>
                </div>
            </>
        )
    }
}


