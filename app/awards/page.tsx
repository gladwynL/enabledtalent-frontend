"use client";

import Image from 'next/image';
import Button from '../../components/Button';
import styles from './awards.module.css';

export default function AwardsPage() {
  return (
    <div className={styles.pageContainer}>
      {/* Header */}
      <Header />

      {/* Main Content Area */}
      <main className={styles.mainContent}>
        {/* Hero/Banner Section - You'll replace this with your content */}
        <section className={styles.heroSection}>
          <div className={styles.container}>
            <h1 className={styles.heroTitle}>Enabled Talents Award</h1>
            <p className={styles.heroDescription}>
              Celebrating excellence and innovation in talent development and inclusive hiring.
            </p>
            {/* Add your hero content here */}
          </div>
        </section>

        {/* Content Sections - Add your specific sections here */}
        <section className={styles.section}>
          <div className={styles.container}>
            {/* Your page content will go here */}
            <p>Start building your awards page content...</p>
          </div>
        </section>

        {/* Add more sections as needed */}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
