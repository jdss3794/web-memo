import React from 'react';
import { deleteList, updateList } from './../store/list/listSlice';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

const List = ({ id, content }) => {
  const dispatch = useDispatch();
  const [updateValue, setupdateValue] = useState('');
  const onDelete = (e) => {
    e.preventDefault();
    dispatch(deleteList(id));
  };
  const onUpdate = (e) => {
    e.preventDefault();
    if (updateValue) {
      dispatch(updateList({ id, content: updateValue }));
      setupdateValue('');
    } else {
      console.log('수정할 값을 입력하세요');
    }
  };
  return (
    <div>
      <div>
        <h3>{id}</h3>
        <p>{content}</p>
      </div>
      <div>
        <input
          type='text'
          value={updateValue}
          onChange={(e) => {
            setupdateValue(e.target.value);
          }}
        />
        <button type='button' onClick={onUpdate}>
          수정하기
        </button>
      </div>
      <div>
        <button type='button' onClick={onDelete}>
          삭제
        </button>
      </div>
    </div>
  );
};

export default List;
