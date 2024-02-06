import { Entity, ManyToOne, PrimaryColumn, Column, JoinColumn, OneToMany } from 'typeorm';
import { Lesson } from './Lesson';
import { Student } from './Student';

@Entity('lesson_student')
export class LessonStudent {
  @PrimaryColumn({ name: 'lesson_id' })
  lessonId!: number;

  @PrimaryColumn({ name: 'student_id' })
  studentId!: number;

  @Column({ type: 'boolean', default: false })
  visit!: boolean;
  
  @ManyToOne(
    () => Lesson,
    (lesson) => lesson.students,
    {onDelete: 'NO ACTION', onUpdate: 'NO ACTION'}
  )
  @JoinColumn([{ name: 'lesson_id', referencedColumnName: 'id' }])
  lessons!: Lesson[];

  @ManyToOne(
    () => Student,
    student => student.lessons,
    {onDelete: 'NO ACTION', onUpdate: 'NO ACTION'}
  )
  @JoinColumn([{ name: 'student_id', referencedColumnName: 'id' }])
  students!: Student[];
}