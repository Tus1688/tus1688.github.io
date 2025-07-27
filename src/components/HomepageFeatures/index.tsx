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
                Initially starting as a developer, but I have always had a
                passion for protecting systems. Sometimes, I engage in
                pentesting for fun through Capture the Flag (CTF) events,
                but I also do it professionally.
            </>
        ),
    },
    {
        title: 'Developer',
        description: (
            <>
                I enjoy developing new projects. Python and Go are my preferred
                languages for accomplishing tasks. For web development,
                I choose React with TypeScript, as they provide the best
                developer experience while remaining fast.
            </>
        ),
    },
    {
        title: 'Data Scientist',
        description: (
            <>

            </>
        ),
    },
    {
        title: 'RLHF SFT Engineer',
        description: (
            <>

            </>
        ),
    },
    {
        title: 'Researcher',
        description: (
            <>

            </>
        ),
    },
    {
        title: 'Learner',
        description: (
            <>

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
