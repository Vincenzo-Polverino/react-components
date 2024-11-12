
import postImg from '../../assets/images/Piuma.jpg'
import Button from "../Button/Button.jsx";

export default function PostCard() {
    return (
        <div className="postCard">

            <img src={postImg} alt="Piuma" />

            <p className="postText">
                <h3 className="postTitle">Titolo del post</h3>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque aspernatur excepturi laborum provident perspiciatis omnis odit molestiae voluptas exercitationem veniam optio facere neque maiores impedit laudantium, rem saepe corporis numquam!ipsum dolor sit amet consectetur adipisicing elit. Eaque aspernatur excepturi laborum provident perspiciatis omnis odit molestiae voluptas exercitationem veniam optio facere neque maiores impedit laudantium, rem saepe corporis numquam!ipsum dolor sit amet consectetur adipisicing elit. Eaque aspernatur excepturi laborum provident perspiciatis omnis odit molestiae voluptas exercitationem veniam optio facere neque maiores impedit laudantium, rem saepe corporis numquam!
            </p>
            <Button />

        </div>
    )
}