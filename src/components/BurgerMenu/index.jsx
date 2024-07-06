import React, { useState } from 'react';
import styles from './style.module.css';

const BurgerMenu = ({ onEdit, onDelete }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.burgerMenu}>
      <div className={styles.burgerIcon} onClick={toggleMenu}>
          &#8942;
          {isOpen && (
        <div className={styles.menuItems}>
          <div onClick={onEdit}>Редактировать</div>
          <div onClick={onDelete}>Удалить</div>
        </div>
      )}
      </div>
    </div>
  );
};

export default BurgerMenu;
