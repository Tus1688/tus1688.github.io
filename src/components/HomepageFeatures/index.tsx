import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
    title: string;
    description: JSX.Element;
    className?: string;
};

const FeatureList: FeatureItem[] = [
    {
        title: '🔒 Security Focused',
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
        title: '💻 Developer',
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
        title: '📊 Data Scientist',
        description: (
            <>
                I enjoy working with data and have proven my skills in data science
                through success in international competitions. My primary
                focus is on forecasting time series and tabular data.
            </>
        ),
    },
    {
        title: '🎯 RLHF SFT Engineer',
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
        title: '🤖 AI Engineer',
        description: (
            <>
                My work with top AI training labs has provided me with extensive
                exposure to advanced AI techniques and prompt engineering practices.
                I specialize in creating effective prompts for various AI models
                and optimizing agentic AI workflows.
            </>
        ),
    },
];

function Feature({ title, description, className }: FeatureItem) {
    return (
        <div className={clsx('col', className)}>
            <div className='text--center padding-horiz--md padding-vert--md'>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default function HomepageFeatures(): JSX.Element {
    const firstRow = FeatureList.slice(0, 3);
    const secondRow = FeatureList.slice(3);

    return (
        <section className={styles.features}>
            <div className='container text--center'>
                <div className='row'>
                    {firstRow.map((props, idx) => (
                        <Feature key={idx} {...props} />
                    ))}
                </div>
                <div className="row">
                    {secondRow.map((props, idx) => (
                        <Feature key={idx} {...props} className={clsx('col--4', idx === 0 && 'col--offset-2')} />
                    ))}
                </div>
            </div>
        </section>
    );
}
