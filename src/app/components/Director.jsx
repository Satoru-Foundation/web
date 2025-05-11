'use client';

import TeamMemberCard from './TeamMemberCard';

export default function DirectorProfile() {
  return (
    <TeamMemberCard
      image="/about/director.jpg"
      name="Kanagala Sai Charan"
      position="Director"
      bio={
        <>
          <p>
            He has extensive research experience and has worked in Europe and the Middle East. His expertise is in designing and running interventions (longitudinal and RCT trials) that address societal challenges.
          </p>
          <p>
            His educational background is in clinical psychology and law. He is also a research fellow in the interdisciplinary fields of technology and PsychoGeoratology (PhD).
          </p>
          <p>
            He is mainly interested in longevity and improving people's quality of life in India using advanced science and technology. His main goal in starting this organisation is to build an ecosystem of researchers and policymakers and provide a platform for them to address society's needs and challenges and offer solutions and interventions, directly benefiting people facing short and long-term challenges.
          </p>
        </>
      }
    />
  );
}