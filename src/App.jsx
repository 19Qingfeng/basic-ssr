import React, { useRef } from "react";

export default function Index({comments}) {

  const inputRef = useRef(null)

  const onSubmit = () => {
    if(inputRef.current) {
      alert(`添加评论内容:${inputRef.current?.value}`)
    }
  }

  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', lineHeight: '1.8' }}>
      <div>
        <div>商品</div>
        <p>价格</p>
        <input ref={inputRef} />
        <button onClick={onSubmit}>添加评论</button>
        <div>
          <div>
            <p>评论</p>
            {
              Array.isArray(comments) && comments.map(comment => {
                return  <p key={comment}>{comment}</p>;
              })
            }
          </div>
        </div>
      </div>
    </div>
  );
}
