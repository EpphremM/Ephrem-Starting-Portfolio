import {FC, memo} from 'react';

import {TimelineItem} from '../../../data/dataDef';

const TimelineItem: FC<{item: TimelineItem}> = memo(({item}) => {
  const {title, date, location, content} = item;
  return (
    <div className="flex flex-col pb-8 text-center last:pb-0 md:text-left text-neutral-200">
      <div className="flex flex-col pb-4">
        <h2 className="text-3xl font-bold text-white leading-tight">{title}</h2>
        <div className="flex items-center justify-center gap-x-2 md:justify-start text-neutral-400 mt-1">
          <span className="flex-1 text-lg font-semibold italic sm:flex-none text-yellow">{location}</span>
          <span>•</span>
          <span className="flex-1 text-lg sm:flex-none">{date}</span>
        </div>
      </div>
      <div className="text-lg leading-relaxed text-neutral-300">
        {content}
      </div>
    </div>
  );
});

TimelineItem.displayName = 'TimelineItem';
export default TimelineItem;
