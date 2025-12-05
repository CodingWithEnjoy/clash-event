"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";
import { EmojiProvider, Emoji } from "react-apple-emojis";
import emojiData from "react-apple-emojis/src/data.json";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <h1 className={styles.title}>تورنومنت کلش رویال حلی 4</h1>

        <p className={styles.subtitle}>
          <EmojiProvider data={emojiData}>
            <Emoji name="fire" width={20} />
          </EmojiProvider>
          لیگ 1 Season کلش رویال مدرسه هم راه افتاد
          <EmojiProvider data={emojiData}>
            <Emoji name="fire" width={20} />
          </EmojiProvider>
        </p>

        <p className={styles.subtitle}>
          <EmojiProvider data={emojiData}>
            <Emoji name="anger-symbol" width={20} />
          </EmojiProvider>
          ظرفیت لیگ ۴۸ یا ۶۴ نفر هست و اگر بیشتر از این تعداد بشیم افرادی که بعد
          از حد نصاب ثبت نام میکنن اسمشون ثبت نمیشه.
          <EmojiProvider data={emojiData}>
            <Emoji name="anger-symbol" width={20} />
          </EmojiProvider>
        </p>

        <Link href="/signup" className={styles.button}>
          همین الان ثبت نام کن !
        </Link>
      </div>

      <div className={styles.info}>
        <Image
          className={styles.infoImg}
          src={"/img/goblin.webp"}
          alt=""
          width={340}
          height={370}
        />

        <div className={styles.infoText}>
          <h2>
            <EmojiProvider data={emojiData}>
              <Emoji name="anger-symbol" width={30} />
            </EmojiProvider>
            توضیحات مهم
          </h2>

          <p>
            <EmojiProvider data={emojiData}>
              <Emoji name="warning" width={20} />
            </EmojiProvider>
            اگر هم به حد نصاب تعداد نرسیم مبلغ جایزه کمتر میشه و مبلغ جایزه سیزن
            دوم در صورت استقبال بیشتر، بیشتر خواهد بود.
          </p>

          <p>
            <EmojiProvider data={emojiData}>
              <Emoji name="dizzy" width={20} />
            </EmojiProvider>
            مسابقات به صورت حذفی و مثل جام جهانی برگزار میشه. در هر مسابقه شرکت
            کنندگان سه بازی انجام میدهند و مشخصا برنده دو بازی به مرحله بعد صعود
            خواهد کرد.
          </p>

          <p>
            <EmojiProvider data={emojiData}>
              <Emoji name="glowing-star" width={20} />
            </EmojiProvider>
            مسابقات به صورت <span>مگا درفت</span> برگزار میشه.
          </p>

          <p>
            <EmojiProvider data={emojiData}>
              <Emoji name="money-with-wings" width={20} />
            </EmojiProvider>
            جایزه برنده <span>+400 هزار تومان</span> می باشد.
          </p>

          <p>
            <EmojiProvider data={emojiData}>
              <Emoji name="money-with-wings" width={20} />
            </EmojiProvider>
            جایزه نفر دوم<span>+150 هزار تومان</span> می باشد.
          </p>

          <p>
            <EmojiProvider data={emojiData}>
              <Emoji name="money-bag" width={20} />
            </EmojiProvider>
            مبلغ ورودی <span>10 هزار تومان</span> است.
          </p>
        </div>
      </div>
    </div>
  );
}
