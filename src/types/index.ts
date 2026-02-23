export interface MenuItem {
    name: string;
    link: string;
}

export interface HeroSectionBody {
    title: string;
    description: string;
    cta_text: string;
    cta_link: string;
}

export interface HeroData {
    section_body: HeroSectionBody;
}

export interface SectionData {
    title: string;
    description: string;
}

export interface AboutSectionBody {
    description: string;
    quotes: string;
    quotes_alt: string;
    profile_image: string;
    profile_alt: string;
}

export interface AboutData {
    section_data: SectionData;
    section_body: AboutSectionBody;
}

export interface SkillItem {
    skillTitle: string;
    skillIcon: string;
}

export interface SkillsData {
    section_data: SectionData;
    section_body: SkillItem[];
}

export interface ExperienceItem {
    companyName: string;
    position: string;
    duration: string;
    location: string;
    logo: string;
}

export interface ExperienceData {
    section_data: SectionData;
    section_body: ExperienceItem[];
}

export interface ProjectItem {
    id: number;
    icon: string;
    title: string;
    description: string;
    link: string;
    isActive: boolean;
}

export interface ProjectData {
    section_data: SectionData;
    section_body: ProjectItem[];
}

export interface VideoSectionBody {
    channel_url: string;
    video_id: string;
    thumbnail: string;
    thumbnail_alt: string;
}

export interface VideoData {
    section_data: SectionData;
    section_body: VideoSectionBody;
}

export interface CtaSectionBody {
    title: string;
    description: string;
    cta_txt: string;
    cta_img: string;
    cta_alt: string;
}

export interface CtaData {
    section_body: CtaSectionBody;
}

export interface ContactSocial {
    github: string;
    linkedin: string;
    youtube: string;
}

export interface ContactSectionData extends SectionData {
    email: string;
    mobile: string;
    social: ContactSocial;
}

export interface ContactData {
    section_data: ContactSectionData;
    section_body: any;
}

export interface FooterSectionBody {
    copyright: string;
    developed: string;
}

export interface FooterData {
    section_body: FooterSectionBody;
}

export interface PortfolioData {
    menu: MenuItem[];
    hero: HeroData;
    about: AboutData;
    skills: SkillsData;
    experience: ExperienceData;
    project: ProjectData;
    video: VideoData;
    cta: CtaData;
    contact: ContactData;
    footer: FooterData;
}
