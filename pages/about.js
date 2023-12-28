import Image from "next/image";

import styles from "../styles/About.module.css";

export default function About() {
  return (
    <div className={styles.about}>
      <h1>Sobre o projeto</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi bibendum
        porttitor malesuada. Curabitur a odio convallis, consequat libero ut,
        laoreet urna. Praesent placerat purus quis elementum consequat.
        Phasellus dignissim tortor id lacus rutrum placerat in ac ligula.
        Pellentesque at velit eget neque bibendum vulputate non suscipit sapien.
        Sed vitae tincidunt urna, bibendum laoreet velit. Morbi nec imperdiet
        tellus. Nam id dictum augue, nec rhoncus mi. Donec sem ante, dignissim
        at fringilla sit amet, hendrerit non erat. Sed vel augue et magna
        porttitor dapibus cursus molestie ante. Nam sit amet elementum augue.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam molestie
        lorem tortor, eu auctor sem convallis id.
      </p>

      <Image
        src="/images/charizard.png"
        width="300"
        height="300"
        alt="Charizard"
      ></Image>
    </div>
  );
}
