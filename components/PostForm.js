import { useCallback, useState, useRef } from "react";
import { Form, Input, Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { addPost } from "../reducers/post";

const PostForm = () => {
  const { imagePaths } = useSelector((state) => state.post);
  const imageInput = useRef();
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const onChangeText = useCallback((e) => {
    setText(e.target.value);
  }, []);
  const onSubmit = useCallback(() => {
    dispatch(addPost);
  }, []);

  const onClickImageUpload = useCallback(() => {
    imageInput.current.click();
  }, [imageInput.current]);

  return (
    <Form
      style={{ margin: "10px 0 20px" }}
      encType="multipart/form-data"
      onFinish={onSubmit}
    >
      <Input.TextArea
        vaule={text}
        onChange={onChangeText}
        maxLength={140}
        placeholder="How was today"
      />
      <div>
        <input type="file" multiple hidden ref={imageInput} />
        <Button onClick={onClickImageUpload}>Image uploads</Button>
        <Button type="primary" style={{ float: "right" }} htmlType="submit">
          upload
        </Button>
      </div>
      <div>
        {imagePaths.map((v) => {
          <div key={v} style={{ display: "inline-block" }}>
            <img srv={v} style={{ width: "200px" }} alt={v}>
              <div>
                <Button>delete</Button>
              </div>
            </img>
          </div>;
        })}
      </div>
    </Form>
  );
};

export default PostForm;
