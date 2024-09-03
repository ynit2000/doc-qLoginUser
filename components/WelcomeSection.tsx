import Image from 'next/image'

export default function WelcomeSection() {
  return (
    <div className="hidden lg:flex lg:w-1/2 bg-docq-light-blue relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/background-pattern.png"
          alt="Background pattern"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full text-center p-12">
        <Image
          src="/images/docq-logo.png"
          alt="docq logo"
          width={100}
          height={40}
          className="mb-8"
        />
        <h1 className="w-full text-4xl font-bold text-docq-blue mb-4">Welcome!</h1>
        <h4 className="w-full text-xl text-docq-blue">
          let's get you started on your<br />journey to better health.
        </h4>
      </div>
    </div>
  )
}