import { useState } from "react";
import { Modal } from "flowbite-react";
import profiles from "../data/profiles";

const FeaturedProfiles = () => {
  const [openModalId, setOpenModalId] = useState(null);

  return (
    <section className="px-4 py-10 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8">Featured Profiles</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {profiles.map((profile) => (
          <div
            key={profile.id}
            onClick={() => setOpenModalId(profile.id)}
            className="cursor-pointer border rounded-xl p-4 hover:shadow-lg transition"
          >
            <div className="flex flex-col items-center text-center">
              <img src={profile.image} alt={profile.name} className="rounded-full mb-2" />
              <h3 className="font-semibold text-xl">{profile.name}</h3>
              <p className="text-sm text-gray-500">{profile.age}</p>
            </div>
            <div className="mt-4 space-y-2 text-sm">
              {profile.hobbies.map((hobby, index) => (
                <p key={index}>
                  <strong>{hobby.title}</strong> — {hobby.description}
                </p>
              ))}
              <p className="pt-2 border-t mt-2 text-gray-600">
                {profile.location}<br />
                {profile.bio}
              </p>
            </div>

            <Modal show={openModalId === profile.id} onClose={() => setOpenModalId(null)}>
              <Modal.Header>{profile.name}</Modal.Header>
              <Modal.Body>
                <div className="text-center">
                  <img
                    src={profile.avatarLarge}
                    alt={`${profile.name} large`}
                    className="rounded-full mx-auto mb-4 w-32 h-32"
                  />
                  <p className="text-sm text-gray-500">{profile.location}</p>
                </div>
              </Modal.Body>
              <Modal.Footer>
                <button
                  onClick={() => setOpenModalId(null)}
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                  Close
                </button>
              </Modal.Footer>
            </Modal>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProfiles;