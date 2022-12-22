import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
    title: string;
    description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
    {
        title: 'Pentester',
        description: (
            <>
                Originally as developer, but I always had a passion for
                protecting systems. Sometimes I do some pentesting for fun, but
                I also do it professionally. I&apos;m always looking for new
                challenges.
            </>
        ),
    },
    {
        title: 'Developer',
        description: (
            <>
                I love to develop new things. Python and Golang are my favorite
                languages to get things done. For web development I choose React
                and TypeScript as they give me the best developer experience
                while still being fast.
            </>
        ),
    },
    {
        title: 'Learner',
        description: (
            <>
                I&apos;m constantly learning new things. Most of the time, I
                learn new things by doing. Personally, CTFs are a great way to
                learn, same goes for creating my own tools / working on
                projects.
            </>
        ),
    },
];

function Feature({ title, description }: FeatureItem) {
    return (
        <div className={clsx('col col--4')}>
            <div className='text--center padding-horiz--md'>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default function HomepageFeatures(): JSX.Element {
    return (
        <section className={styles.features}>
            <div className='container'>
                <div className='row'>
                    {FeatureList.map((props, idx) => (
                        <Feature key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}
