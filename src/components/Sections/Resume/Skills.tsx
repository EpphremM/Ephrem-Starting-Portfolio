import {FC, memo, PropsWithChildren} from 'react';

import {Skill as SkillType, SkillGroup as SkillGroupType} from '../../../data/dataDef';

export const SkillGroup: FC<PropsWithChildren<{ skillGroup: SkillGroupType }>> = memo(({ skillGroup }) => {
  const { name, skills } = skillGroup;
  return (
    <div className="flex flex-col gap-y-6">
      <span className="text-xl font-bold tracking-tight text-neutral-100 border-l-4 border-yellow pl-3">
        {name}
      </span>
      <div className="flex flex-wrap gap-4">
        {skills.map((skill, index) => (
          <Skill key={`${skill.name}-${index}`} skill={skill} />
        ))}
      </div>
    </div>
  );
});

SkillGroup.displayName = 'SkillGroup';

export const Skill: FC<{ skill: SkillType }> = memo(({ skill }) => {
  const { name, description } = skill;

  return (
    <div className="group flex flex-col gap-y-3 rounded-2xl bg-neutral-900/50 p-6 shadow-xl transition-all duration-300 hover:bg-neutral-800 hover:-translate-y-1 hover:shadow-yellow/20 border border-neutral-800">
      <div className="flex items-center gap-x-4">
        <div className="h-2 w-2 rounded-full bg-yellow shadow-[0_0_10px_rgba(239,198,3,0.8)]" />
        <span className="text-base font-bold tracking-wide text-neutral-100 whitespace-nowrap">{name}</span>
      </div>
      {description && (
        <p className="pl-6 text-xs font-semibold leading-relaxed text-neutral-400 group-hover:text-neutral-200">
          {description}
        </p>
      )}
    </div>
  );
});

Skill.displayName = 'Skill';
