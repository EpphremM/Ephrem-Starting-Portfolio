import {FC, memo, PropsWithChildren, useMemo} from 'react';

import {Skill as SkillType, SkillGroup as SkillGroupType} from '../../../data/dataDef';

export const SkillGroup: FC<PropsWithChildren<{skillGroup: SkillGroupType}>> = memo(({skillGroup}) => {
  const {name, skills} = skillGroup;
  return (
    <div className="flex flex-col gap-y-4">
      <span className="text-lg font-bold text-neutral-800">{name}</span>
      <div className="flex flex-col gap-y-6">
        {skills.map((skill, index) => (
          <Skill key={`${skill.name}-${index}`} skill={skill} />
        ))}
      </div>
    </div>
  );
});

SkillGroup.displayName = 'SkillGroup';

export const Skill: FC<{skill: SkillType}> = memo(({skill}) => {
  const {name, level, max = 10, description} = skill;
  const percentage = useMemo(() => Math.round((level / max) * 100), [level, max]);

  return (
    <div className="flex flex-col gap-y-1.5">
      <div className="flex items-center justify-between">
        <span className="text-sm font-bold text-neutral-800">{name}</span>
        <span className="bg-neutral-200 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-neutral-600 rounded">
          {percentage}%
        </span>
      </div>
      <div className="h-2 w-full overflow-hidden rounded-full bg-neutral-200">
        <div className="h-full rounded-full bg-yellow" style={{width: `${percentage}%`}} />
      </div>
      {description && <p className="text-xs text-neutral-500 leading-relaxed">{description}</p>}
    </div>
  );
});

Skill.displayName = 'Skill';
