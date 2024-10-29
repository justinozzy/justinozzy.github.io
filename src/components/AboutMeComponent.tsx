import Image from 'next/image';

const AboutMe = () => {
    return (
        <div className="flex justify-center">
            <div className="center">
                <Image
                    src="/thebigcheese.jpg"
                    width={400}
                    height={500}
                    alt="Justin Oswald Himself"
                    className="rounded-image"
                />
                <br />
                <p>
                    <span style={{ fontSize: '20px', width: '20em', display: 'inline-block' }}>
                        Hi visitor, I'm Justin! In 2024 I graduated from Arizona State University with a Bachelor's Degree in Computer Science.
                        <br />
                        <br />
                        I'm a talented and aspiring software engineer with a deep passion for tackling challenges in software development and system architecture.
                        I'm currently searching for an opportunity that will fuel my curiosity and expose me to new experiences within the software engineering world.
                    </span>
                </p>
            </div>
        </div>
    );
};

export default AboutMe;