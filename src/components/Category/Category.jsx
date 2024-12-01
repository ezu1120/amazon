import React from 'react'
import {categoryInfo} from '../Category/catagoryFullinfo'
import CategoryCard from './CategoryCard'
import css from './Category.module.css'
function Category ()  {
  return (
    <section className={css.category__container}>
      {
        categoryInfo.map((infos) => (
          <CategoryCard data={infos} />
        ))
      }
</section>
  )
}

export default Category