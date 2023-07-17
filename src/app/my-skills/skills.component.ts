import { Component } from '@angular/core';
import { BE_LIST_SKILL, DB_LIST_SKILL, FE_LIST_SKILL } from '../utils/skills';
import { SKILL } from '../utils/skill-type';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {

  private be_skills: SKILL[] = [];
  private fe_skills: SKILL[] = [];
  private db_skills: SKILL[] = [];

  constructor(){
    this.fillBeSkills();
    this.fillFeSkills();
    this.fillDbSkills();
  }

  getBeSkill(){
    return this.be_skills;
  }

  getFeSkill(){
    return this.fe_skills;
  }

  getDbSkill(){
    return this.db_skills;
  }

  private fillBeSkills(){
    this.be_skills = BE_LIST_SKILL;
  }

  private fillFeSkills(){
    this.fe_skills = FE_LIST_SKILL;
  }
  
  private fillDbSkills(){
    this.db_skills = DB_LIST_SKILL;
  }
}
