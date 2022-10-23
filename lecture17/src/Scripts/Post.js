import '../Styles/Post.css';

function Post(prop){
  return <div className='Post'>
    <img src={prop.author.photo} alt="Author"></img>
    <div>{prop.author.name}</div>
    <div>{prop.author.nickname}</div>
    <p>{prop.content}</p>
    <img src={prop.image} alt="Post"></img>
    <p>{prop.date}</p>
  </div>
}

export default Post;