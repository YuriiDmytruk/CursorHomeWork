import '../Styles/Post.css';

function Post(prop){
  return <div className='Post'>
    <p>{prop.author.name}</p>
    <p>{prop.author.nickname}</p>
    <img src={prop.author.photo} alt="Author"></img>
    <p>{prop.content}</p>
    <img src={prop.image} alt="Post"></img>
    <p>{prop.date}</p>
  </div>
}

export default Post;