/**
 * Timeline Component
 *
 * The Timeline component displays a structured timeline of events or actions. Each timeline
 * slot can contain multiple items, each with a title, description, and an optional button.
 *
 * Props:
 *
 * - `slots` (ITimelineSlot[]): An array of timeline slots, each containing a title and an array of items.
 * - `hoverable` (boolean): A flag that determines if the timeline items should have a hover effect.
 *
 * Usage:
 *
 * ```jsx
 * const timelineData = [
 *   {
 *     title: "Phase 1",
 *     items: [
 *       {
 *         title: "Step 1",
 *         description: "Description of step 1",
 *         button: {
 *           title: "Learn More",
 *           logo: "path/to/logo.png",
 *         },
 *       },
 *       // More items...
 *     ],
 *   },
 *   // More slots...
 * ];
 *
 * <Timeline slots={timelineData} hoverable={true} />
 * ```
 */

export interface ITimelineItem {
  title: string;
  description: string;
  button: {
    title: string;
    logo: string;
  };
}

export interface ITimelineSlot {
  title: string;
  items: ITimelineItem[];
}

export interface ITimelineProps {
  slots: ITimelineSlot[];
  hoverable: boolean;
}

export const Timeline = ({ slots, hoverable }: ITimelineProps) => (
  <div className="timeline">
    {slots?.map((slot) => (
      <>
        <div className="timeline-slot">
          <h3 className="timeline-slot--title">{slot.title}</h3>
        </div>

        {slot.items?.map((item: ITimelineItem) => (
          <div
            className={`timeline-item ${hoverable ? 'hover:bg-gray-100' : ''} group`}
          >
            <div className="timeline-item--line">
              <div className="timeline-item--line-wrapper">
                <div className="timeline-item--line-dot"></div>
              </div>
            </div>

            <div className="timeline-item--body">
              <h3 className="timeline-item--title">{item.title}</h3>
              {item.description && (
                <p className="timeline-item--description">{item.description}</p>
              )}
              {item.button && (
                <button
                  type="button"
                  className={`mt-1 -ms-1 p-1 inline-flex items-center gap-x-2 text-xs rounded-lg border border-transparent text-gray-500 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none ${hoverable ? 'hover:bg-gray-100 hover:bg-white hover:shadow-sm' : ''}`}
                >
                  <img
                    className="shrink-0 size-4 rounded-full"
                    src={item.button.logo}
                    alt="Avatar"
                  ></img>
                  {item.button.title}
                </button>
              )}
            </div>
          </div>
        ))}
      </>
    ))}
  </div>
);
