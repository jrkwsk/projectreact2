import React from "react";
import styles from "./Form.module.scss";
// import styles, nie samo import i w kasie ={styles.wrapper} 
// teraz style nie są globalne 

const Form = ({ submitFn }) => (
  <div className={styles.wrapper}>
    <h2>Add new twitter account</h2>
    <form autoComplete="off" className={styles.form} onSubmit={submitFn}>
      <div className={styles.formItem}>
        <input
          className={styles.input}
          type="text"
          name="name"
          id="name"
          placeholder=" "
          maxLength="30"
          required
        />
        <label className={styles.label} htmlFor="name">Name</label>
        <div className={styles.formItemBar} />
      </div>
      <div className={styles.formItem}>
        <input className={styles.input} type="text" name="link" id="link" placeholder=" " required />
        <label className={styles.label} htmlFor="link">Link</label>
        <div className={styles.formItemBar} />
      </div>
      <div className={styles.formItem}>
        <input className={styles.input} type="text" name="image" id="image" placeholder=" "  />
        <label className={styles.label} htmlFor="image">Image</label>
        <div className={styles.formItemBar} />
      </div>
      <div className={styles.formItem}>
        <textarea className={styles.textarea} name="description" id="description" placeholder=" " required />
        <label className={styles.label} htmlFor="description">Description</label>
        <div className={styles.formItemBar} />
      </div>
      <button className={styles.button}>
        add new item
      </button>
    </form>
  </div>
);

export default Form;
