import { useState } from 'react';
import { GifGrid, AddCategory } from './components';

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['One Punch Man']);

  const handleAddCategory = (category) => {
    !categories.includes(category) && setCategories([category, ...categories]);
  };

  return (
    <>
      <h1> GifExpertApp </h1>
      <AddCategory onNewCategory={handleAddCategory} />
      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};
