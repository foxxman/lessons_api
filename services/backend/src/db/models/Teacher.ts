import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from 'typeorm';
import { LessonTeacher } from './LessonTeacher';
import { Lesson } from './Lesson';

@Entity('teacher')
export class Teacher {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id!: number;

  @Column('varchar', { name: 'name', length: 255 })
  name!: string;

  @ManyToMany(() => Lesson, lesson => lesson.teachers)
  @JoinTable({
    name: 'lesson_teacher',
    joinColumn: {
      name: 'teacher_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'lesson_id',
      referencedColumnName: 'id',
    },
  })
  lessons?: Lesson[];
}