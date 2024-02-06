import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from 'typeorm';
import { Lesson } from './Lesson';

@Entity('student')
export class Student {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id!: number;

  @Column('varchar', { name: 'name', length: 255 })
  name!: string;

  @ManyToMany(() => Lesson, lesson => lesson.students)
  @JoinTable({
    name: 'lesson_student',
    joinColumn: {
      name: 'student_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'lesson_id',
      referencedColumnName: 'id',
    },
  })
  lessons?: Lesson[];
}