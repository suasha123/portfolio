import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import WorkIcon from "@mui/icons-material/Work";
import StarIcon from "@mui/icons-material/Star";

export const Project = () => {
  return (
    <section className="w-full px-6 py-16 ">
      <div className="flex items-center justify-center mb-12">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text drop-shadow-[0_0_15px_rgba(168,85,247,0.8)] p-3">
         Projects
        </h1>
      </div>
      <VerticalTimeline>
        {/* SafeWalk */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "linear-gradient(145deg, #111, #1a1a1a)",
            color: "#fff",
            border: "1px solid rgba(168,85,247,0.4)",
            boxShadow: "0 0 15px rgba(168,85,247,0.5)",
            borderRadius: "12px",
          }}
          contentArrowStyle={{ borderRight: "7px solid rgba(168,85,247,0.6)" }}
          date="June-25 to Aug-25"
          dateClassName="text-purple-400 font-semibold"
          iconStyle={{
            background: "linear-gradient(145deg, #9333ea, #a855f7)",
            color: "#fff",
            boxShadow: "0 0 15px rgba(168,85,247,0.9)",
          }}
          icon={<WorkIcon />}
        >
          <h3 className="text-xl font-bold text-purple-400">SafeWalk</h3>
          <h4 className="mt-2 text-gray-300">
            Link :{" "}
            <a
              href="https://safee-walk.vercel.app/"
              className="text-pink-400 hover:text-pink-300 hover:underline transition-all duration-200"
            >
              safeWalk App
            </a>
          </h4>
          <h4 className="text-gray-300">
            Link :{" "}
            <a
              href="https://github.com/suasha123/SafeWalk"
              className="text-pink-400 hover:text-pink-300 hover:underline"
            >
              Repo Link
            </a>
          </h4>
          <p className="mt-3 text-gray-400 leading-relaxed">
            SafeWalk is a community-driven web app that lets users mark and
            report theft or harassment areas. Reported areas are highlighted as
            danger zones, and users receive alerts when nearby.
          </p>
        </VerticalTimelineElement>

        {/* Bloggiffy */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Jan-25 to March 25"
          dateClassName="text-purple-400 font-semibold"
          contentStyle={{
            background: "linear-gradient(145deg, #111, #1a1a1a)",
            color: "#fff",
            border: "1px solid rgba(168,85,247,0.4)",
            boxShadow: "0 0 15px rgba(168,85,247,0.5)",
            borderRadius: "12px",
          }}
          iconStyle={{
            background: "linear-gradient(145deg, #9333ea, #a855f7)",
            color: "#fff",
            boxShadow: "0 0 15px rgba(168,85,247,0.9)",
          }}
          icon={<WorkIcon />}
        >
          <h3 className="text-xl font-bold text-purple-400">Bloggiffy</h3>
          <h4 className="text-gray-300">
            Link :{" "}
            <a
              href="https://github.com/suasha123/BlogApp"
              className="text-pink-400 hover:text-pink-300 hover:underline"
            >
              Repo Link
            </a>
          </h4>
          <p className="mt-3 text-gray-400 leading-relaxed">
            Bloggiffy is a blogging platform allowing users to share content and
            follow their favorite bloggers.
          </p>
        </VerticalTimelineElement>

        {/* TasteQuest */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Oct 24 - Nov-24"
          dateClassName="text-purple-400 font-semibold"
          contentStyle={{
            background: "linear-gradient(145deg, #111, #1a1a1a)",
            color: "#fff",
            border: "1px solid rgba(168,85,247,0.4)",
            boxShadow: "0 0 15px rgba(168,85,247,0.5)",
            borderRadius: "12px",
          }}
          iconStyle={{
            background: "linear-gradient(145deg, #9333ea, #a855f7)",
            color: "#fff",
            boxShadow: "0 0 15px rgba(168,85,247,0.9)",
          }}
          icon={<WorkIcon />}
        >
          <h3 className="text-xl font-bold text-purple-400">TasteQuest</h3>
          <h4 className="text-gray-300">
            Link :{" "}
            <a
              href="https://github.com/suasha123/Recipe-Finder"
              className="text-pink-400 hover:text-pink-300 hover:underline"
            >
              Repo Link
            </a>
          </h4>
          <p className="mt-3 text-gray-400 leading-relaxed">
            TasteQuest is a recipe finder and generator web application.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          iconStyle={{
            background: "linear-gradient(145deg, #16a34a, #22c55e)",
            color: "#fff",
            boxShadow: "0 0 15px rgba(34,197,94,0.9)",
          }}
          icon={<StarIcon />}
        />
      </VerticalTimeline>
    </section>
  );
};
