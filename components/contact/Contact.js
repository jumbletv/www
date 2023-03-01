import React from "react";
import styles from "./Contact.module.scss";
import { PageList } from "common/pageList/PageList";
import { useTranslation } from "next-i18next";

export function Contact() {
  const { contactContainer, contactInfo, contactForm, divider, inputGroup } =
    styles;

  const { t } = useTranslation("contact");

  return (
    <>
      <div className={contactContainer}>
        <div className={contactInfo}>
          <h1>Bonjour!</h1>
          <p>{t("contact_text_1")}</p>
          <p>{t("contact_text_2")}</p>
          <p>{t("contact_text_3")}</p>
        </div>
        <div className={contactForm}>
          <div className={divider} />
          <div className={inputGroup}>
            <label htmlFor="name">Name</label>
            <input type="text" placeholder="What is your name ? " />
          </div>
          <div className={divider} />
          <div className={inputGroup}>
            <label htmlFor="name">Email</label>
            <input type="text" placeholder="We don't spam :)" />
          </div>
          <div className={divider} />
          <div className={inputGroup}>
            <label htmlFor="name">Message</label>
            <textarea type="text" placeholder="Share your thoughts" rows={8} />
          </div>
          <div className={divider} />
          <button>Send</button>
        </div>
      </div>
      <PageList />
    </>
  );
}
