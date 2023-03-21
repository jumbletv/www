import React from "react";
import styles from "./Contact.module.scss";
import { MorePages } from "common/morePages/MorePages";
import { useTranslation } from "next-i18next";

interface ContactProps {}

interface InputGroupProps {
  label: string;
  placeholder: string;
  type: string;
  rows?: number;
}

interface ContactFormProps {
  inputGroups: InputGroupProps[];
  buttonText: string;
}

interface ContactInfoProps {
  heading: string;
  paragraphs: string[];
}

export function Contact(props: ContactProps) {
  const { contactContainer, contactInfo, contactForm, divider, inputGroup } =
    styles as { [key: string]: string };

  const { t } = useTranslation("contact");

  const inputGroups: InputGroupProps[] = [
    {
      label: t("name"),
      placeholder: "What is your name?",
      type: "text",
    },
    {
      label: "Email",
      placeholder: "We don't spam :)",
      type: "email",
    },
    {
      label: "Message",
      placeholder: "Share your thoughts",
      type: "textarea",
      rows: 8,
    },
  ];

  const contactFormProps: ContactFormProps = {
    inputGroups,
    buttonText: t("send"),
  };

  const contactInfoProps: ContactInfoProps = {
    heading: "Bonjour!",
    paragraphs: [
      t("contact_text_1"),
      t("contact_text_2"),
      t("contact_text_3"),
    ],
  };

  return (
    <>
      <div className={contactContainer}>
        <div className={contactInfo}>
          <h1>{contactInfoProps.heading}</h1>
          {contactInfoProps.paragraphs.map((p, index) => (
            <p key={index}>{p}</p>
          ))}
        </div>
        <div className={contactForm}>
          <div className={divider} />
          {contactFormProps.inputGroups.map((inputGroupProps, index) => (
            <div key={index} className={inputGroup}>
              <label htmlFor={inputGroupProps.label}>
                {inputGroupProps.label}
              </label>
              {inputGroupProps.type === "textarea" ? (
                <textarea
                  placeholder={inputGroupProps.placeholder}
                  rows={inputGroupProps.rows ?? 4}
                />
              ) : (
                <input
                  type={inputGroupProps.type}
                  placeholder={inputGroupProps.placeholder}
                />
              )}
            </div>
          ))}
          <div className={divider} />
          <button>{contactFormProps.buttonText}</button>
        </div>
      </div>
      <MorePages />
    </>
  );
}