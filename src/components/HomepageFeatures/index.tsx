import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
    title: string;
    description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
    {
        title: 'Security Focused',
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
                Python and Go are my preferred
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
                I enjoy working with data and have proven my skills in data science
                through success in international competitions. My primary
                focus is on forecasting time series and tabular data.
            </>
        ),
    },
    {
        title: 'RLHF SFT Engineer',
        description: (
            <>
                I am currently working as a contractor at three AI training labs,
                where I support coding and language projects as an AI trainer.
                Additionally, I am trusted to provide feedback to fellow
                contributors and help set quality standards.
            </>
        ),
    },
    {
        title: 'AI Engineer',
        description: (
            <>
                My work with top AI training labs has provided me with extensive
                exposure to advanced AI techniques and prompt engineering practices.
                I specialize in creating effective prompts for various AI models
                and optimizing agentic AI workflows.
            </>
        ),
    },
    // {
    //     title: 'Learner',
    //     description: (
    //         <>
    //             The tech world evolves rapidly following the AI boom, and 
    //             I believe continuous learning is essential to stay relevant. 
    //             In addition, I actively explore new technologies, frameworks, 
    //             and methodologies to adapt and deliver results quickly and efficiently.
    //         </>
    //     ),
    // },
];

function Feature({ title, description }: FeatureItem) {
    return (
        <div className={clsx('col col--4')}>
            <div className='text--center padding-horiz--md padding-vert--md'>
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
