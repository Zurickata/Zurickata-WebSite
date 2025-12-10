import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class Lead {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  fullName: string;

  @Column()
  email: string;

  @Column({ nullable: true })
  phone?: string;

  @Column({ nullable: true })
  company?: string;

  @Column()
  serviceType: string;

  @Column({ type: 'text' })
  message: string;

  @Column({ nullable: true })
  howDidYouFindMe?: string;

  @Column({ default: 'new' })
  status: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
