import Link from "next/link";
import styles from "src/components/nav/index.module.scss";
import Image from "next/image";

const TOPICS = [
  {
    icon: "01",
    paths: "/",
    title: "Top stories",
  },
  {
    icon: "03",
    paths: "/topics/bussiness",
    title: "Bussiness",
  },
  {
    icon: "04",
    paths: "/topics/technology",
    title: "Top stories",
  },
  {
    icon: "05",
    paths: "/topics/entertaiment",
    title: "Entertainment",
  },
  {
    icon: "06",
    paths: "/topics/sports",
    title: "Sports",
  },
];

export const Nav: React.FC = () => {
  return (
    <section>
      <ul className={styles.contents}>
        {TOPICS.map((topic, index) => {
          return (
            <li key={index}>
              <Link href={`${topic.path}`}>
                <a>
                  <span>
                    <Image src={`/img/navIcons/${topic.icon}.png`} alt={`${topic.title} icon`} loading="eager" width={33} height={33} />
                  </span>
                  <span>{topic.title}</span>
                </a>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
