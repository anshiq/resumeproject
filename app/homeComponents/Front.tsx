import "./Home.css";
import Image from "next/image";
export default function FrontPage() {
  return (
    <>
      <div>
        <div className="home-background"></div>
        <div className="absolute top-[30vh] left-[10%] flex flex-col sm:w-[50%] w-[80%]">
          <h1 className="font-extrabold text-4xl mb-4">Restoring Hope</h1>
          <p>
            Let us all join hand and heart to produce heaven on the earth.we
            need to herald a scientific philosophy on this earth which will be
            destructive of all evils and which will produce men of trust and
            Character through whom human relations will be in all respect sweet
            and blessed.
          </p>
          <a
            className="p-3 mt-6 border border-white w-[10rem] hover:text-black hover:bg-white hover:border-black"
            href="/explore"
          >
            {" "}
            Explore More
          </a>
        </div>
        {/* bg-gradient-to-r from-orange-700 to-red-700 */}
        <div className="flex min-h-screen my-3 flex-col-reverse sm:flex-row justify-around items-center">
          <div className="sm:w-2/5 w-4/5 ">
            <h1 className="text-3xl">Devatma</h1>
            <p>
              Devatma (1850-1929), the most worshipful founder of Dev Samaj
              Society and the discoverer and teacher of the one, true
              science-based, universal system of soul culture for all mankind,
              lived an ideal life. This ideal life, possessed of the highest
              sense of obsessive love for truth and goodness, and complete
              repulsion for untruth and evil was unique in personal life and
              conduct, in his aim of life, in his teachings and in his life
              mission and work. His ideal life, as Herbert Spencer had predicted
              is incomprehensible to millions of men even now. The life of
              highest psychic senses and the ideal standard of conduct, with the
              evolution of his love for truth and goodness, He developed a
              unique psychic light and power and became a future luminary of the
              soul world.
              <br />
              Spiritual Name: Devatma
              <br />
              Birth place: Shri Akbarpur Sahib,
            </p>
          </div>
          <div className="sm:w-2/5 w-4/5  h-[60vh] my-3 overflow-hidden">
            <Image
              src={"/static/images/nature3.jpg"}
              className="w-full"
              width={400}
              height={300}
              alt="can't load nature image"
            />
          </div>
        </div>
      </div>

      <div className="flex sm:flex-row flex-col justify-around sm:items-start items-center  w-full mb-20 ">
        <div className="sm:w-2/5 mb-2 w-4/5 p-4  bg-gray-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100">
          <h1 className="text-3xl mb-2">Our Mission:</h1>
          <p>
            The Highest Meaning of Life develops scientific temper and higher
            feelings to build a society where humanity can reach to its highest
            level. It educates the people about the immutable laws of Nature and
            its evolution for human soul (life-force). If we left this world a
            little better place, with the following objects, that’s an
            accomplishment for us.
            <ul>
              <li>
                To raise awareness on the harms of various addictions such as
                intoxicants, drugs, meat/egg/fish diet, gambling and all social
                evils.
              </li>
              <li>
                To encourage the removal of crimes and anti-social behaviour
                within society.
              </li>
              <li>To promote cleaner living and healthier lifestyles.</li>
              <li>
                The advancement of education and altruistic life through the
                provision of educational materials and to provide
                underprivileged youths with educational scholarships.
              </li>
            </ul>
          </p>
        </div>
        <div className="sm:w-2/5 mb-2 w-4/5 p-4 bg-gray-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100">
          <h1  className="text-3xl mb-2">Our Vision:</h1>
          <p>
            The Highest Meaning of Life envisions and practices humanitarianism
            and selfless services to others. Higher loves and higher-hates are
            the only source for complete harmony and absolute unity among four
            kingdoms of Nature. Also it envisions the better world —full of
            highest values and its intrinsic beauty—where there is a kingdom of
            complete love of Truth, Goodness and Beauty. The Highest Meaning of
            Life envisions a ray of hope where the world will be free from all
            kinds of social evils, all levels of exploitation and free from all
            low-loves and low-hates. The beautiful future world where will be no
            poor people, no beggars, no homeless people, no street children but
            will be only saviour of life for others in the whole universe. We
            want the earth without crimes, wars and without any kind of
            exploitation in the human world, animals, plant kingdom and physical
            world. The time must come when there will be existences in each
            kingdom whose intra-group and extra-group relationships will be one
            of pure service and absolute harmony.
          </p>
        </div>
      </div>
    </>
  );
}

