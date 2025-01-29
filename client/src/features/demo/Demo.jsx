import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchData, postData, selectError } from './demoSlice';

const Demo = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.demo);
  const ogErr = useSelector(selectError);
  const [newPost, setNewPost] = useState('');

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const handlePost = () => {
    if (newPost.trim() !== '') {
      dispatch(postData({ title: newPost, body: 'Demo post content' }));
      setNewPost('');
    }
  };

  return (
    <div className="min-h-screen p-6 flex flex-col items-center bg-gray-100">
      <h2 className="text-2xl font-bold mb-4">Demo Redux API Calls</h2>

      {loading && <p className="text-blue-500">Loading...</p>}
      {error && <p className="text-red-500">Error: {ogErr}</p>}

      <div className="bg-white p-4 rounded-lg shadow-md w-1/2">
        <h3 className="text-xl font-semibold mb-2">Post Data</h3>
        <input
          type="text"
          value={newPost}
          onChange={(e) => setNewPost(e.target.value)}
          className="border p-2 w-full mb-2"
          placeholder="Enter new post"
        />
        <button
          onClick={handlePost}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Add Post
        </button>
      </div>

      <h3 className="text-xl font-semibold mt-6">Fetched Data</h3>
      <div className="bg-white p-4 rounded-lg shadow-md w-1/2">
        {data.map((item) => (
          <div key={item.id} className="border-b p-2">
            <p className="font-semibold">{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Demo;
