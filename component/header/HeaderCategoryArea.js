import { FarzaaContext } from '@/context/FarzaaContext'
import Link from 'next/link'
import React, { useContext } from 'react'

const HeaderCategoryArea = ({header,title}) => {
    const {
        isCategoryOpen,
        handleCategoryBtn,
        categoryBtnRef,
    } = useContext(FarzaaContext)
  return (
    <div className={`fz-category-area ${header}`} ref={categoryBtnRef}>
        <button className="fz-category-btn" onClick={handleCategoryBtn}>
            <i className="fa-solid fa-grid"></i>
            <span className={title}>Category</span>
        </button>

        <div className={`fz-category-menu ${isCategoryOpen? 'open':''}`}>
            <div className="row gx-3 gx-md-5 gy-5">
                <div className="col-md-4 col-6">
                    <ul className="fz-category-list">
                        <li><Link href="/shop">Rings (29)</Link></li>
                        <li><Link href="/shop">Earrings (47)</Link></li>
                        <li><Link href="/shop">Necklaces (68)</Link></li>
                        <li><Link href="/shop">locket (44)</Link></li>
                        <li><Link href="/shop">Bangle (12)</Link></li>
                        <li><Link href="/shop">Bolo tie (48)</Link></li>
                        <li><Link href="/shop">Brooch (64)</Link></li>
                        <li><Link href="/shop">Body Piercing (56)</Link></li>
                    </ul>
                </div>
                <div className="col-md-4 col-6">
                    <ul className="fz-category-list">
                        <li><Link href="/shop">Rings (29)</Link></li>
                        <li><Link href="/shop">Earrings (47)</Link></li>
                        <li><Link href="/shop">Necklaces (68)</Link></li>
                        <li><Link href="/shop">locket (44)</Link></li>
                        <li><Link href="/shop">Bangle (12)</Link></li>
                        <li><Link href="/shop">Bolo tie (48)</Link></li>
                        <li><Link href="/shop">Brooch (64)</Link></li>
                        <li><Link href="/shop">Body Piercing (56)</Link></li>
                    </ul>
                </div>
                <div className="col-md-4 col-6">
                    <ul className="fz-category-list">
                        <li><Link href="/shop">Rings (29)</Link></li>
                        <li><Link href="/shop">Earrings (47)</Link></li>
                        <li><Link href="/shop">Necklaces (68)</Link></li>
                        <li><Link href="/shop">locket (44)</Link></li>
                        <li><Link href="/shop">Bangle (12)</Link></li>
                        <li><Link href="/shop">Bolo tie (48)</Link></li>
                        <li><Link href="/shop">Brooch (64)</Link></li>
                        <li><Link href="/shop">Body Piercing (56)</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HeaderCategoryArea