import Image from 'next/image';

const AboutMe = () => {
    return (
        <div className="flex justify-center items-center space-x-64 p-6 mt-16 text-fade-down">
            <div className="flex-shrink-0">
                <Image
                    src="/thebigcheese.jpg"
                    width={400}
                    height={500}
                    alt="Justin Oswald Himself"
                    className="rounded-lg shadow-lg"
                />
            </div>

            <div className="max-w-md">
                <p className="text-lg leading-relaxed">
                    <span className="block text-2xl font-semibold mb-4">
                        Hi visitor, I'm Justin!
                    </span>
                    In 2024 I graduated from Arizona State University with a Bachelor's Degree in Computer Science.
                    <br />
                    <br />
                    I'm a talented and aspiring software engineer with a deep passion for tackling challenges in software development and system architecture.
                    <br />
                    <br />
                    I'm currently searching for an opportunity that will fuel my curiosity and expose me to new experiences within the software engineering world.
                </p>
            </div>
        </div>
    );
};

export default AboutMe;