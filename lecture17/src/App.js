
import Post from './Scripts/Post.js'

function App() {
  const ANAKIN_IMAGE = "https://imagez.tmz.com/image/b8/1by1/2021/10/25/b823cb5212504585a16a46faa55537db_xl.jpg";
  const RAY_IMAGE = "https://specials-images.forbesimg.com/imageserve/5e63b3c8e1e617000759130e/960x0.jpg?fit=scale";
  return (
    <div>
      <Post author={{
            name: "Anakin skywalker",
            photo: ANAKIN_IMAGE,
            nickname: "@dart_vader"
         }}
         content="WTF? Who is Ray? Why she is Skywalker? Luke...?"
         image={RAY_IMAGE}
         date={"26 feb."}
/>
    </div>
  );
}

export default App;
